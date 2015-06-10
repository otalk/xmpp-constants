module.exports = {
    Action: {
        CONTENT_ACCEPT: 'content-accept',
        CONTENT_ADD: 'content-add',
        CONTENT_MODIFY: 'content-modify',
        CONTENT_REJECT: 'content-reject',
        CONTENT_REMOVE: 'content-remove',
        DESCRIPTION_INFO: 'description-info',
        SECURITY_INFO: 'security-info',
        SESSION_ACCEPT: 'session-accept',
        SESSION_INFO: 'session-info',
        SESSION_INITIATE: 'session-initiate',
        SESSION_TERMINATE: 'session-terminate',
        TRANSPORT_ACCEPT: 'transport-accept',
        TRANSPORT_INFO: 'transport-info',
        TRANSPORT_REJECT: 'transport-reject',
        TRANSPORT_REPLACE: 'transport-replace'
    },
    Reason: {
        ALTERNATIVE_SESSION: 'alernative-session',
        BUSY: 'busy',
        CANCEL: 'cancel',
        CONNECTIVITY_ERROR: 'connectivity-error',
        DECLINE: 'decline',
        EXPIRED: 'expired',
        FAILED_APPLICATION: 'failed-application',
        FAILED_TRANSPORT: 'failed-transport',
        GENERAL_ERROR: 'general-error',
        GONE: 'gone',
        INCOMPATIBLE_PARAMETERS: 'incompatible-parameters',
        MEDIA_ERROR: 'media-error',
        SECURITY_ERROR: 'security-error',
        SUCCESS: 'success',
        TIMEOUT: 'timeout',
        UNSUPPORTED_APPLICATIONS: 'unsupported-applications',
        UNSUPPORTED_TRANSPORTS: 'unsupported-transports'
    },
    Condition: {
        OUT_OF_ORDER: 'out-of-order',
        TIE_BREAK: 'tie-break',
        UNKNOWN_SESSION: 'unknown-session',
        UNSUPPORTED_INFO: 'unsupported-info'
    }
};
