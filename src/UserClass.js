import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "...",
                Location: "..."
            }
        }

        // console.log("child constructor");
    }

    async componentDidMount() {
        // console.log("child component did mount");
        const data = await fetch("https://api.github.com/users/gary1116");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo: json,
        })
    }

    render() {

        // console.log("child render")
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className='user-card'>
                <div className="left">
                <img className="profile_dp" src={avatar_url} alt="my dp" />
                </div>
                <div className="right">
                <h2>Name: {name}</h2>
                <h3>Location:-{location}</h3>
                <h4>Github:-gary1116</h4>
                </div>
            </div>
        )
    }

}

export default UserClass