const { unfollowUser, followUser } = require('./api_util');
const APIUtil = require('./api_util')

class FollowToggle{
    constructor(el){
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
        this.$el.on('click', this.handleClick.bind(this))
    }

    render(){
        if (this.followState === "followed") {
            this.$el.text('Unfollow!');
        } else {
            this.$el.text('Follow!');
        }
    }

    handleClick(e){
        e.preventDefault();
        if (this.followState === "followed") {
            APIUtil.unfollowUser(this.userId)
            .then(() => {this.followState = "unfollowed"})
            .then(() => this.render());
        } else {
            APIUtil.followUser(this.userId)
            .then(() => {this.followState = "followed"})
            .then(() => this.render());
        }

    }
}

module.exports = FollowToggle;