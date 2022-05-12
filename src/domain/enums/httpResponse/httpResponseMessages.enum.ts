/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
export enum HttpResponseMessages {

  CONTINUE = "Continue",
  SWITCHING_PROTOCOLS = "Switching Protocols",
  PROCESSING = "Processing",

  OK = "OK",
  CREATED = "Created",
  ACCEPTED = "Accepted",
  NON_AUTHORITATIVE_INFORMATION = "Non-Authoritative Information",
  NO_CONTENT = "No Content",
  RESET_CONTENT = "Reset Content",
  PARTIAL_CONTENT = "Partial Content",

  AMBIGUOUS = "Multiple Choices",
  MOVED_PERMANENTLY = "Moved Permanently",
  FOUND = "Found",
  SEE_OTHER = "See Other",
  NOT_MODIFIED = "Not Modified",
  TEMPORARY_REDIRECT = "Temporary Redirect",
  PERMANENT_REDIRECT = "Permanent Redirect",

  BAD_REQUEST = "Bad Request",
  UNAUTHORIZED = "Unauthorized",
  PAYMENT_REQUIRED = "Payment Required",
  FORBIDDEN = "Forbidden",
  NOT_FOUND = "Not Found",
  METHOD_NOT_ALLOWED = "Method Not Allowed",
  NOT_ACCEPTABLE = "Not Acceptable",
  PROXY_AUTHENTICATION_REQUIRED = "Proxy Authentication Required",
  REQUEST_TIMEOUT = "Request Timeout",
  CONFLICT = "Conflict",
  GONE = "Gone",
  LENGTH_REQUIRED = "Length Required",
  PRECONDITION_FAILED = "Precondition Failed",
  PAYLOAD_TOO_LARGE = "Request Entity Too Large",
  URI_TOO_LONG = "Request-URI Too Long",
  UNSUPPORTED_MEDIA_TYPE = "Unsupported Media Type",
  REQUESTED_RANGE_NOT_SATISFIABLE = "Requested Range Not Satisfiable",
  EXPECTATION_FAILED = "Expectation Failed",
  I_AM_A_TEAPOT = "I'm a teapot",
  UNPROCESSABLE_ENTITY = "Unprocessable Entity",
  FAILED_DEPENDENCY = "Failed Dependency",
  TOO_MANY_REQUESTS = "Too Many Requests",

  INTERNAL_SERVER_ERROR = "Internal Server Error",
  NOT_IMPLEMENTED = "Not Implemented",
  BAD_GATEWAY = "Bad Gateway",
  SERVICE_UNAVAILABLE = "Service Unavailable",
  GATEWAY_TIMEOUT = "Gateway Timeout",
  HTTP_VERSION_NOT_SUPPORTED = "HTTP Version Not Supported",
}