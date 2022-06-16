const FollowToggle = require("./follow_toggle.js")

$(function(){
    const $toggles = $('.follow-toggle')
    $toggles.each ((idx,el) => {
        return new FollowToggle(el);
    })
})