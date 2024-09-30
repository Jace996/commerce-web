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
import { V1ActivityFilter } from './v1-activity-filter';

/**
 * 
 * @export
 * @interface V1ListActivityRequest
 */
export interface V1ListActivityRequest {
    /**
     * 
     * @type {number}
     * @memberof V1ListActivityRequest
     */
    'pageOffset'?: number;
    /**
     * 
     * @type {number}
     * @memberof V1ListActivityRequest
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof V1ListActivityRequest
     */
    'search'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ListActivityRequest
     */
    'sort'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1ListActivityRequest
     */
    'fields'?: string;
    /**
     * 
     * @type {V1ActivityFilter}
     * @memberof V1ListActivityRequest
     */
    'filter'?: V1ActivityFilter;
    /**
     * 
     * @type {string}
     * @memberof V1ListActivityRequest
     */
    'afterPageToken'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListActivityRequest
     */
    'beforePageToken'?: string;
}

