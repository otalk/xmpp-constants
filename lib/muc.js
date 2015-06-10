module.exports = {
    Status: {
        REALJID_PUBLIC: '100',
        AFFILIATION_CHANGED: '101',
        UNAVAILABLE_SHOWN: '102',
        UNAVAILABLE_NOT_SHOWN: '103',
        CONFIGURATION_CHANGED: '104',
        SELF_PRESENCE: '110',
        LOGGING_ENABLED: '170',
        LOGGING_DISABLED: '171',
        NON_ANONYMOUS: '172',
        SEMI_ANONYMOUS: '173',
        FULLY_ANONYMOUS: '174',
        ROOM_CREATED: '201',
        NICK_ASSIGNED: '210',
        BANNED: '301',
        NEW_NICK: '303',
        KICKED: '307',
        REMOVED_AFFILIATION: '321',
        REMOVED_MEMBERSHIP: '322',
        REMOVED_SHUTDOWN: '332'
    },
    Affiliation: {
        ADMIN: 'admin',
        MEMBER: 'member',
        NONE: 'none',
        OUTCAST: 'outcast',
        OWNER: 'owner'
    },
    Role: {
        MODERATOR: 'moderator',
        NONE: 'none',
        PARTICIPANT: 'participant',
        VISITOR: 'visitor'
    }
};
