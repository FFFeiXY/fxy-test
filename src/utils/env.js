let APIHOST = ''
if (process.env.NODE_ENV === 'development' || location.host.includes('prv') || location.host.includes('qa')){
    APIHOST = ''
} else {
    APIHOST = ''
}
export {
    APIHOST
}
