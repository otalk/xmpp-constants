module.exports = {
// ================================================================
// RFCS
// ================================================================

// RFC 6120
    BIND: 'urn:ietf:params:xml:ns:xmpp-bind',
    CLIENT: 'jabber:client',
    SASL: 'urn:ietf:params:xml:ns:xmpp-sasl',
    SERVER: 'jabber:server',
    SESSION: 'urn:ietf:params:xml:ns:xmpp-session',
    STANZA_ERROR: 'urn:ietf:params:xml:ns:xmpp-stanzas',
    STREAM: 'http://etherx.jabber.org/streams',
    STREAM_ERROR: 'urn:ietf:params:xml:ns:xmpp-streams',

// RFC 6121
    ROSTER: 'jabber:iq:roster',
    ROSTER_VERSIONING: 'urn:xmpp:features:rosterver',
    SUBSCRIPTION_PREAPPROVAL: 'urn:xmpp:features:pre-approval',

// RFC 7395
    FRAMING: 'urn:ietf:params:xml:ns:xmpp-framing',

// ================================================================
// XEPS
// ================================================================

// XEP-0004
    DATAFORM: 'jabber:x:data',

// XEP-0009
    RPC: 'jabber:iq:rpc',

// XEP-0012
    LAST_ACTIVITY: 'jabber:iq:last',

// XEP-0016
    PRIVACY: 'jabber:iq:privacy',

// XEP-0030
    DISCO_INFO: 'http://jabber.org/protocol/disco#info',
    DISCO_ITEMS: 'http://jabber.org/protocol/disco#items',

// XEP-0033
    ADDRESS: 'http://jabber.org/protocol/address',

// XEP-0045
    MUC: 'http://jabber.org/protocol/muc',
    MUC_ADMIN: 'http://jabber.org/protocol/muc#admin',
    MUC_OWNER: 'http://jabber.org/protocol/muc#owner',
    MUC_USER: 'http://jabber.org/protocol/muc#user',

// XEP-0047
    IBB: 'http://jabber.org/protocol/ibb',

// XEP-0048
    BOOKMARKS: 'storage:bookmarks',

// XEP-0049
    PRIVATE: 'jabber:iq:private',

// XEP-0050
    ADHOC_COMMANDS: 'http://jabber.org/protocol/commands',

// XEP-0054
    VCARD_TEMP: 'vcard-temp',

// XEP-0055
    SEARCH: 'jabber:iq:search',

// XEP-0059
    RSM: 'http://jabber.org/protocol/rsm',

// XEP-0060
    PUBSUB: 'http://jabber.org/protocol/pubsub',
    PUBSUB_ERRORS: 'http://jabber.org/protocol/pubsub#errors',
    PUBSUB_EVENT: 'http://jabber.org/protocol/pubsub#event',
    PUBSUB_OWNER: 'http://jabber.org/protocol/pubsub#owner',

// XEP-0065
    SOCKS5: 'http://jabber.org/protocol/bytestreams',

// XEP-0066
    OOB: 'jabber:x:oob',

// XEP-0070
    HTTP_AUTH: 'http://jabber.org/protocol/http-auth',

// XEP-0071
    XHTML_IM: 'http://jabber.org/protocol/xhtml-im',

// XEP-0077
    REGISTER: 'jabber:iq:register',

// XEP-0079
    AMP: 'http://jabber.org/protocol/amp',

// XEP-0080
    GEOLOC: 'http://jabber.org/protocol/geoloc',

// XEP-0083
    ROSTER_DELIMITER: 'roster:delimiter',

// XEP-0084
    AVATAR_DATA: 'urn:xmpp:avatar:data',
    AVATAR_METADATA: 'urn:xmpp:avatar:metadata',

// XEP-0085
    CHAT_STATES: 'http://jabber.org/protocol/chatstates',

// XEP-0092
    VERSION: 'jabber:iq:version',

// XEP-0107
    MOOD: 'http://jabber.org/protocol/mood',

// XEP-0108
    ACTIVITY: 'http://jabber.org/protocol/activity',

// XEP-0114
    COMPONENT: 'jabber:component:accept',

// XEP-0115
    CAPS: 'http://jabber.org/protocol/caps',

// XEP-0118
    TUNE: 'http://jabber.org/protocol/tune',

// XEP-0122
    DATAFORM_VALIDATION: 'http://jabber.org/protocol/xdata-validate',

// XEP-0124
    BOSH: 'http://jabber.org/protocol/httpbind',

// XEP-0131
    SHIM: 'http://jabber.org/protocol/shim',

// XEP-0138
    COMPRESSION: 'http://jabber.org/features/compress',

// XEP-0141
    DATAFORM_LAYOUT: 'http://jabber.org/protocol/xdata-layout',

// XEP-0144
    ROSTER_EXCHANGE: 'http://jabber.org/protocol/rosterx',

// XEP-0145
    ROSTER_NOTES: 'storage:rosternotes',

// XEP-0152
    REACH_0: 'urn:xmpp:reach:0',

// XEP-0153
    VCARD_TEMP_UPDATE: 'vcard-temp:x:update',

// XEP-0158
    CAPTCHA: 'urn:xmpp:captcha',

// XEP-0166
    JINGLE_1: 'urn:xmpp:jingle:1',
    JINGLE_ERRORS_1: 'urn:xmpp:jingle:errors:1',

// XEP-0167
    JINGLE_RTP_1: 'urn:xmpp:jingle:apps:rtp:1',
    JINGLE_RTP_ERRORS_1: 'urn:xmpp:jingle:apps:rtp:errors:1',
    JINGLE_RTP_INFO_1: 'urn:xmpp:jingle:apps:rtp:info:1',

// XEP-0171
    LANG_TRANS: 'urn:xmpp:langtrans',
    LANG_TRANS_ITEMS: 'urn:xmpp:langtrans:items',

// XEP-0172
    NICK: 'http://jabber.org/protocol/nick',

// XEP-0176
    JINGLE_ICE_UDP_1: 'urn:xmpp:jingle:transports:ice-udp:1',

// XEP-0177
    JINGLE_RAW_UDP_1: 'urn:xmpp:jingle:transports:raw-udp:1',

// XEP-0184
    RECEIPTS: 'urn:xmpp:receipts',

// XEP-0186
    INVISIBLE_0: 'urn:xmpp:invisible:0',

// XEP-0191
    BLOCKING: 'urn:xmpp:blocking',

// XEP-0198
    SMACKS_3: 'urn:xmpp:sm:3',

// XEP-0199
    PING: 'urn:xmpp:ping',

// XEP-0202
    TIME: 'urn:xmpp:time',

// XEP-0203
    DELAY: 'urn:xmpp:delay',

// XEP-0206
    BOSH_XMPP: 'urn:xmpp:xbosh',

// XEP-0215
    DISCO_EXTERNAL_1: 'urn:xmpp:extdisco:1',

// XEP-0221
    DATAFORM_MEDIA: 'urn:xmpp:media-element',

// XEP-0224
    ATTENTION_0: 'urn:xmpp:attention:0',

// XEP-0231
    BOB: 'urn:xmpp:bob',

// XEP-0234
    FILE_TRANSFER_3: 'urn:xmpp:jingle:apps:file-transfer:3',
    FILE_TRANSFER_4: 'urn:xmpp:jingle:apps:file-transfer:4',

// XEP-0249
    MUC_DIRECT_INVITE: 'jabber:x:conference',

// XEP-0258
    SEC_LABEL_0: 'urn:xmpp:sec-label:0',
    SEC_LABEL_CATALOG_2: 'urn:xmpp:sec-label:catalog:2',
    SEC_LABEL_ESS_0: 'urn:xmpp:sec-label:ess:0',

// XEP-0260
    JINGLE_SOCKS5_1: 'urn:xmpp:jingle:transports:s5b:1',

// XEP-0261
    JINGLE_IBB_1: 'urn:xmpp:jingle:transports:ibb:1',

// XEP-0262
    JINGLE_RTP_ZRTP_1: 'urn:xmpp:jingle:apps:rtp:zrtp:1',

// XEP-0264
    THUMBS_0: 'urn:xmpp:thumbs:0',
    THUMBS_1: 'urn:xmpp:thumbs:1',

// XEP-0276
    DECLOAKING_0: 'urn:xmpp:decloaking:0',

// XEP-0280
    CARBONS_2: 'urn:xmpp:carbons:2',

// XEP-0293
    JINGLE_RTP_RTCP_FB_0: 'urn:xmpp:jingle:apps:rtp:rtcp-fb:0',

// XEP-0294
    JINGLE_RTP_HDREXT_0: 'urn:xmpp:jingle:apps:rtp:rtp-hdrext:0',

// XEP-0297
    FORWARD_0: 'urn:xmpp:forward:0',

// XEP-0300
    HASHES_1: 'urn:xmpp:hashes:1',

// XEP-0301
    RTT_0: 'urn:xmpp:rtt:0',

// XEP-0307
    MUC_UNIQUE: 'http://jabber.org/protocol/muc#unique',

// XEP-308
    CORRECTION_0: 'urn:xmpp:message-correct:0',

// XEP-0310
    PSA: 'urn:xmpp:psa',

// XEP-0313
    MAM_TMP: 'urn:xmpp:mam:tmp',
    MAM_0: 'urn:xmpp:mam:0',

// XEP-0317
    HATS_0: 'urn:xmpp:hats:0',

// XEP-0319
    IDLE_1: 'urn:xmpp:idle:1',

// XEP-0320
    JINGLE_DTLS_0: 'urn:xmpp:jingle:apps:dtls:0',

// XEP-0328
    JID_PREP_0: 'urn:xmpp:jidprep:0',

// XEP-0334
    HINTS: 'urn:xmpp:hints',

// XEP-0335
    JSON_0: 'urn:xmpp:json:0',

// XEP-0337
    EVENTLOG: 'urn:xmpp:eventlog',

// XEP-0338
    JINGLE_GROUPING_0: 'urn:xmpp:jingle:apps:grouping:0',

// XEP-0339
    JINGLE_RTP_SSMA_0: 'urn:xmpp:jingle:apps:rtp:ssma:0',

// XEP-0340
    COLIBRI: 'http://jitsi.org/protocol/colibri',

// XEP-0343
    DTLS_SCTP_1: 'urn:xmpp:jingle:transports:dtls-sctp:1',

// XEP-0352
    CSI: 'urn:xmpp:csi',

// XEP-0353
    JINGLE_MSG_INITIATE_0: 'urn:xmpp:jingle:jingle-message:0',

// XEP-0357
    PUSH_0: 'urn:xmpp:push:0',

// XEP-0358
    JINGLE_PUB_1: 'urn:xmpp:jinglepub:1'
};
