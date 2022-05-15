#!/bin/bash

set -Eeuo pipefail
trap cleanup SIGINT SIGTERM ERR EXIT

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)

usage() {
  cat << EOF # remove the space between << and EOF, this is due to web plugin issue
Usage: $(basename "${BASH_SOURCE[0]}") [-h] [-build_docker] [-build_and_run_docker] [-stop_docker] [-run_app] [-run_test] [-run_lint] [-deploy_on_kubernetes] 


This script helps you to runn the application in different forms. below you can get the full list of available options.

Available options:

-h, --help              Print this help and exit
-build_docker           Build the docker image called "intersection:latest"
-build_and_run_docker   Build the docker image and run on local machine
-stop_docker            Stop running docker container named "intersection"
-run_app                Run application with npm in usual way for development
-run_test               Run npm test
-run_lint               Run npm lint
-deploy_on_kubernetes   you need to have a kubernetes cluster already up and running on the machine.
EOF
  exit
}
#=============================================================================================================================================================================
cleanup() {
  trap - SIGINT SIGTERM ERR EXIT
  # script cleanup here
}
#=============================================================================================================================================================================
setup_colors() {
  if [[ -t 2 ]] && [[ -z "${NO_COLOR-}" ]] && [[ "${TERM-}" != "dumb" ]]; then
    NOFORMAT='\033[0m' RED='\033[0;31m' GREEN='\033[0;32m' ORANGE='\033[0;33m' BLUE='\033[0;34m' PURPLE='\033[0;35m' CYAN='\033[0;36m' YELLOW='\033[1;33m'
  else
    NOFORMAT='' RED='' GREEN='' ORANGE='' BLUE='' PURPLE='' CYAN='' YELLOW=''
  fi
}
#=============================================================================================================================================================================
msg() {
  echo >&2 -e "${1-}"
}
#=============================================================================================================================================================================
die() {
  local msg=$1
  local code=${2-1} # default exit status 1
  msg "$msg"
  exit "$code"
}
#=============================================================================================================================================================================
checkIfHelmIsInstalled()
{
    echo "Checking Helm ..."
if command which helm > /dev/null; then
        echo "Helm is not installed! :("
        echo "Installing Helm ..."
        curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
        sudo chmod 700 get_helm.sh
        ./get_helm.sh
        echo "Checking secrets helm plugin..."
        helm plugin install https://github.com/jkroepke/helm-secrets --version v3.12.0 || true
        echo "helm is installed, skipping..."
    else
        echo "Helm is installed :) ..."
        sleep 1
fi
}
#=============================================================================================================================================================================
runOnKubernetes(){
    checkIfHelmIsInstalled
    cd ..
    make
}
#=============================================================================================================================================================================
runTheApp()
{
    npm start
}
#=============================================================================================================================================================================
runTheTests()
{
    npm test
}
#=============================================================================================================================================================================
runtheLint()
{
    npm run lint
}
#=============================================================================================================================================================================
runDockerImage(){
   cd ..
    docker-compose up -d
}
#=============================================================================================================================================================================
stopDockerImage(){
   cd ..
    docker-compose down
}
#=============================================================================================================================================================================
buildDockerImage()
{
    echo "Checking Docker ..."
if [[ $(which docker) && $(docker --version) ]]; then
        echo "Docker is installed :) ..."
        sleep 1
       
    else
        echo "Docker is not installed! :("
        echo "Installing Docker ..."
        sudo apt install docker.io || true
        sudo usermod -aG docker $USER
        newgrp docker 
fi

    echo "Checking docker-compose ..."
if [[ $(which docker-compose) && $(docker-compose --version) ]]; then
        echo "docker-compose is installed :) ..."
        sleep 1
    else
        echo "docker-compose is not installed! :("
        echo "Installing Docker ..."
        sudo apt install docker-compose || true      
fi
}
#=============================================================================================================================================================================
parse_params() {
  # default values of variables set from params

  while :; do
    case "${1-}" in
    -h | --help) usage ;;
    -build_docker) buildDockerImage ;;
    -build_and_run_docker) runDockerImage ;;
    -stop_docker) stopDockerImage ;;
    -run_app) runTheApp ;;
    -run_test) runTheTests ;;
    -run_lint) runtheLint ;;
    -deploy_on_kubernetes) runOnKubernetes ;;
    -v | --verbose) set -x ;;
    --no-color) NO_COLOR=1 ;;
    -?*) die "Unknown option: $1" ;;
    *) break ;;
    esac
    shift
  done
  
  args=("$@")

  return 0
}
#=============================================================================================================================================================================
clear
setup_colors
parse_params "$@"
#=============================================================================================================================================================================
