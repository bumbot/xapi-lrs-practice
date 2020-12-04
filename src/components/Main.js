import React, {Component} from 'react';

const LRS = 'https://lrs.adlnet.gov/xapi'

class Main extends Component {
    
    //generates and sends xAPI statement
    sendStatement(event) {
        let actor = this.props.userLogin,
            verb = this.props.userAction,
            activity = this.props.userActivity

        let action = event.target;
        debugger
        //depending on action,  populate statement

                /* generic button pressed, action turns to clicked*/
        if (action = "button") {

                /* button under video pressed, action turns to watched */
        } else if (action = "") {

        } else {
            alert("Unidentified Action");
        }


    }

    populateStatement

    //what gets rendered once user gets past login page
    render(){
        return(
            <div>
                {/* generic button: action = "clicked" */}
                <div>
                    <button onClick={(event)=> this.sendStatement(event)}>
                        Click here to send a sample xAPI statement
                    </button>
                </div>
                {/* video button: action = "watched" */}
                <div>
                    <iframe width="560"
                            height="315"
                            src="https://www.youtube.com/embed/y42MSS1DJqc"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                    />
                    <button onClick={(event) => this.sendStatement(event)}>
                        Click here once finished watching
                    </button>
                </div>
            </div>
        )
    }
}

export default Main;







/*
    xAPI Statement definition:

    "actor": {  
        "mbox": "mailto:Tester@example.com",  
        "name": "tester12",  
        "objectType": "Agent"  
    },  
    "verb": {  
        "id": "http://example.com/xapi/interacted",  
        "display": {"en-US": "clicked"}  
    },  
    "object": {  
        "id": "http://example.com/button_example",  
        "definition": {  
            "name": {"en-US": "Button example"},  
            "description": {"en-US": "Example xAPI Button"}  
        },  
        "objectType": "Activity"  
    }  

*/