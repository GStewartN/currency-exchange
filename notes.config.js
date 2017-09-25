import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';
import fetch from 'isomorphic-fetch';
import twitter from './../../twitter.config';

export const requestTweets = (keyword) => ({
  type: types.REQUEST_TWEETS,
  keyword
});


export function fetchTweets() {
  return fetch("https://api.twitter.com/1.1/search/tweets.json?q=" + "texas" + "&src=typd", {
    method: 'GET',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Authorization": {
        "OAuth": {
          "oauth_consumer_key": "MB2Ts98zSjG23JCHAN4BCEatZ",
          "oauth_token": "19511406-U2TRNCWDRh3R1KJfIKteUcjrAu1CHkZF2K3yi6a4c",
          "oauth_signature_method": "HMAC-SHA1",
          "oauth_timestamp": "1506378105",
          "oauth_nonce": "J2dGQh",
          "oauth_version": "1.0",
          "oauth_signature": "tuVBSfESpH6%2B7jgFVMKG5bmxNzI%3D"
        }
      }
    }
  }).then(
    response => response.json(),
    error => console.log("An error occured.", error)
  ).then(function(json) {
    console.log(json);
  })
}

{
    "token_type": "bearer",
    "access_token": "AAAAAAAAAAAAAAAAAAAAAMHa2QAAAAAA87luUIGRigmr4%2FF%2BbJZszRJPVtg%3DRTSHdL3LQXcA3oIYSG4bMy2d134k1O1WZZ7nxaqXQPJfTYVV62"
}
