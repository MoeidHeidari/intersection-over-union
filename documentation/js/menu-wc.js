'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">intersection documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HttpResponseModule.html" data-type="entity-link" >HttpResponseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HttpResponseModule-d6be2a8c69608a8b7686646048e8e2c510d59075e4f35517549210b327a3d1a1a94a519904c1c7f952447bd9615ed0e26aa9bb8b06fa1cb16965f2476641ab9d"' : 'data-target="#xs-injectables-links-module-HttpResponseModule-d6be2a8c69608a8b7686646048e8e2c510d59075e4f35517549210b327a3d1a1a94a519904c1c7f952447bd9615ed0e26aa9bb8b06fa1cb16965f2476641ab9d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HttpResponseModule-d6be2a8c69608a8b7686646048e8e2c510d59075e4f35517549210b327a3d1a1a94a519904c1c7f952447bd9615ed0e26aa9bb8b06fa1cb16965f2476641ab9d"' :
                                        'id="xs-injectables-links-module-HttpResponseModule-d6be2a8c69608a8b7686646048e8e2c510d59075e4f35517549210b327a3d1a1a94a519904c1c7f952447bd9615ed0e26aa9bb8b06fa1cb16965f2476641ab9d"' }>
                                        <li class="link">
                                            <a href="injectables/HttpResponseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HttpResponseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntersectionModule.html" data-type="entity-link" >IntersectionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-IntersectionModule-c2102fdfd9e65f536af9f538e96161b49e1c2e68e9d70fb3a8ad50cb099c99cd1c63e201f98181bf9bd2fd2d0cfb584b3f41711cf430fa5466ab8f43ab71ffdb"' : 'data-target="#xs-controllers-links-module-IntersectionModule-c2102fdfd9e65f536af9f538e96161b49e1c2e68e9d70fb3a8ad50cb099c99cd1c63e201f98181bf9bd2fd2d0cfb584b3f41711cf430fa5466ab8f43ab71ffdb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-IntersectionModule-c2102fdfd9e65f536af9f538e96161b49e1c2e68e9d70fb3a8ad50cb099c99cd1c63e201f98181bf9bd2fd2d0cfb584b3f41711cf430fa5466ab8f43ab71ffdb"' :
                                            'id="xs-controllers-links-module-IntersectionModule-c2102fdfd9e65f536af9f538e96161b49e1c2e68e9d70fb3a8ad50cb099c99cd1c63e201f98181bf9bd2fd2d0cfb584b3f41711cf430fa5466ab8f43ab71ffdb"' }>
                                            <li class="link">
                                                <a href="controllers/IntersectionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntersectionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IntersectionModule-c2102fdfd9e65f536af9f538e96161b49e1c2e68e9d70fb3a8ad50cb099c99cd1c63e201f98181bf9bd2fd2d0cfb584b3f41711cf430fa5466ab8f43ab71ffdb"' : 'data-target="#xs-injectables-links-module-IntersectionModule-c2102fdfd9e65f536af9f538e96161b49e1c2e68e9d70fb3a8ad50cb099c99cd1c63e201f98181bf9bd2fd2d0cfb584b3f41711cf430fa5466ab8f43ab71ffdb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IntersectionModule-c2102fdfd9e65f536af9f538e96161b49e1c2e68e9d70fb3a8ad50cb099c99cd1c63e201f98181bf9bd2fd2d0cfb584b3f41711cf430fa5466ab8f43ab71ffdb"' :
                                        'id="xs-injectables-links-module-IntersectionModule-c2102fdfd9e65f536af9f538e96161b49e1c2e68e9d70fb3a8ad50cb099c99cd1c63e201f98181bf9bd2fd2d0cfb584b3f41711cf430fa5466ab8f43ab71ffdb"' }>
                                        <li class="link">
                                            <a href="injectables/IntersectionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntersectionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoggerModule-3d3c499a205622e3b970140ef8e33b2a38e286655ac86b24e0162dba6e03e013317f712e52864f412c4a9bccf62f62b3ccecb47bfadc2a74b6e4150c857aab0b"' : 'data-target="#xs-injectables-links-module-LoggerModule-3d3c499a205622e3b970140ef8e33b2a38e286655ac86b24e0162dba6e03e013317f712e52864f412c4a9bccf62f62b3ccecb47bfadc2a74b6e4150c857aab0b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-3d3c499a205622e3b970140ef8e33b2a38e286655ac86b24e0162dba6e03e013317f712e52864f412c4a9bccf62f62b3ccecb47bfadc2a74b6e4150c857aab0b"' :
                                        'id="xs-injectables-links-module-LoggerModule-3d3c499a205622e3b970140ef8e33b2a38e286655ac86b24e0162dba6e03e013317f712e52864f412c4a9bccf62f62b3ccecb47bfadc2a74b6e4150c857aab0b"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeederModule.html" data-type="entity-link" >SeederModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/IntersectionController.html" data-type="entity-link" >IntersectionController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BoundingBoxDTO.html" data-type="entity-link" >BoundingBoxDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariables.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpResponseException.html" data-type="entity-link" >HttpResponseException</a>
                            </li>
                            <li class="link">
                                <a href="classes/IOUResponseDTO.html" data-type="entity-link" >IOUResponseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/IOURquestDTO.html" data-type="entity-link" >IOURquestDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HttpResponseService.html" data-type="entity-link" >HttpResponseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerInterceptor.html" data-type="entity-link" >LoggerInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link" >LoggerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BoundingBox.html" data-type="entity-link" >BoundingBox</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HttpResponse.html" data-type="entity-link" >HttpResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IntersectionOptions.html" data-type="entity-link" >IntersectionOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidationPipeOptions.html" data-type="entity-link" >ValidationPipeOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});