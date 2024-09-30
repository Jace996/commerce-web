/* tslint:disable */
/* eslint-disable */
/**
 * order/api/order/v1/order.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { V1TicketingMedia } from './v1-ticketing-media';

/**
 * 
 * @export
 * @interface V1UpdateActivity
 */
export interface V1UpdateActivity {
    /**
     * 
     * @type {string}
     * @memberof V1UpdateActivity
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateActivity
     */
    'name': string;
    /**
     * 
     * @type {V1TicketingMedia}
     * @memberof V1UpdateActivity
     */
    'mainPic'?: V1TicketingMedia;
    /**
     * 
     * @type {Array<V1TicketingMedia>}
     * @memberof V1UpdateActivity
     */
    'medias'?: Array<V1TicketingMedia>;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateActivity
     */
    'desc'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateActivity
     */
    'shortDesc'?: string;
    /**
     * 
     * @type {object}
     * @memberof V1UpdateActivity
     */
    'content'?: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1UpdateActivity
     */
    'categoryKeys'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof V1UpdateActivity
     */
    'seatSelectable'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateActivity
     */
    'duration'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateActivity
     */
    'notice'?: string;
}

