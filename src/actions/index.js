import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';
import fetch from 'isomorphic-fetch';
import twitter from './../../twitter.config';
import base64 from 'base-64';

function getBearerToken(consumerKey, consumerSecret) {
  let encodedKeys = base64.encode(consumerKey + ':' + consumerSecret);
  console.log(encodedKeys);

  return fetch('https://api.twitter.com/oauth2/token?grant_type=client_credentials', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + encodedKeys,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  }).then(response => {
    console.log(response)
    if (response.status >= 400)
      throw new Error('Bad response from server.');

    return response.json();
  }).then(json => 'bearer' === json.token_type ? json.access_token : '');
}

function searchTwitter(token, keyword) {
  return fetch('https://api.twitter.com/1.1/search/tweets.json?q=' + encodeURIComponent(keyword), {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }).then(response => response.json());
}

module.exports = {
  getBearerToken,
  searchTwitter
};
