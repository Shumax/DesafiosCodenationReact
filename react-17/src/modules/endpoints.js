import { config } from "../config";
const {spotify} = config;

const defaultOptions = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'method': 'GET'
};

export const endpoints = {
    getAuthorization: {
        url: `${spotify.authorizationURL}?client_id=${spotify.clientId}${(spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : '')}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&response_type=token&show_dialog=true`,
        options: {
            method: 'GET'
        }
    }
}