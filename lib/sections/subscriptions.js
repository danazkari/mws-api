'use strict';

const _ = require('lodash');
const Enum = require('../enum');
const Type = require('../types');

const required = true;
const list = true;

const requestDefaults = {
    name: 'Subscriptions',
    group: 'Subscriptions',
    path: '/Subscriptions/2013-07-01',
    version: '2013-07-01'
};

const enums = {
    NotificationTypes() {
        return new Enum([
            'AnyOfferChanged',
            'FulfillmentOrderStatus',
            'FreePromotion'
        ]);
    }
};

const types = {
    ServiceStatus: {
        GREEN: 'The service is operating normally.',
        GREEN_I: 'The service is operating normally + additional info provided',
        YELLOW: 'The service is experiencing higher than normal error rates or degraded performance.',
        RED: 'The service is unabailable or experiencing extremely high error rates.'
    },
    NotificationType: {
        AnyOfferChanged: 'Notification is sent whenever there is a listing change.',
        FullfillmentOrderStatus: 'Notification is sent whenever there is a change in the status of a multi-channel fullfilment order.',
        FreePromotion: 'Notifies when a time-limited Free Promotion is available.'
    }
};

const requests = {
    RegisterDestination: {
        params: {
            MarketplaceId: { name: 'MarketplaceId.Id', list, required },
            Destination: { name: 'Destination' }
        }
    },
    DeregisterDestination: {},
    ListResiteredDestinations: {},
    SendTestNotificationToDestination: {},
    CreateSubscription: {},
    GetSubscription: {},
    DeleteSubscription: {},
    ListSubscriptions: {},
    UpdateSubscription: {},
    GetServiceStatus: {}
};

module.exports = {
    enums,
    requestDefaults,
    requests,
    types
};
