import moment from "moment";

export function capitalize(str: string) {
    if(!str) return;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function timeAgo(timestamp: string) {
    const now = moment();
    const timeAgoString = moment(timestamp).from(now, true);
    return timeAgoString;
}

export function likeCount(num: number) {
    if(num < 2 ) return `${num} like`;
    return `${num} likes`;
}
