import request from '@/services/request'
import { Response } from 'superagent'

/**
 * Retrieve a list of products.
 *
 * @returns {Promise<Response>} The response with a list of products.
 */
export function getProducts(): Promise<Response> {
  return request.get('/products')
}

/**
 * Retrieve a list of locations.
 *
 * @returns {Promise<Response<Location[]>>} The response with a list of locations.
 */
export function getLocations(): Promise<Response> {
  return request.get(`/locations`)
}
