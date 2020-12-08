import React, {Component} from 'react';
// import API from './cryptojs_v3.1.2'
// import xAPIWrapper from './xapiwrapper'

/*
    because we added cryptojs and xapiwrapper files as script tags in index.html
    we can now call on functions inside of the respective files by prepending
    each function with 'window.functionName'
*/

class Main extends Component {
    
    //generates and sends xAPI statement
    sendAPIStatement(event) {
        let actor = this.props.userLogin,
            verb = event.target.value,
            activity = event.target.dataset.object,
            description = event.target.dataset.description

        let statement;

        //configure endpoints
        var config = {
            "endpoint" : "https://lrs.adlnet.gov/xapi/",
            "auth" : "Basic " + window.toBase64("xapi-tools:xapi-tools")
            };
 
        window.ADL.XAPIWrapper.changeConfig(config);

        //depending on action, populate statement
        
        /* generic button pressed, action turns to clicked*/
        if (verb === "clicked") {
            statement = this.populateStatement(actor, verb, activity);

            // this.setState({
            //     userAction: verb,
            //     userActivity: activity
            // })

        /* button under video pressed, action turns to watched */
        } else if (verb === "watched") {
            statement = this.populateStatement(actor, verb, activity)

            // this.setState({
            //     userAction:verb,
            //     userActivity: activity
            // })

        } else {
            alert("Unidentified Action");
            statement = this.populateStatement(actor, "n/a", activity)
        }
        
        //send info to lrs
        var result = window.ADL.XAPIWrapper.sendStatement(statement);
        
        //outputs alert - if error occured, display error; else display success
        result.xhr.status === 400 ? alert(result.xhr.responseText) : alert("xAPI statment successfully sent to LRS!")
        

    }

    populateStatement(actor, verb, activity) {
        return {
            "actor": {
                "mbox": `mailto:${actor}@example.com`,
                "name": `${actor}`,
                "objectType": "Agent"
            },  
            "verb": {
                "id": "http://example.com/xapi/interacted",
                "display": {"en-US": `${verb}`}
            },
            "object": {
                "id": "http://example.com/button_example",
                "definition": {
                    "name": {"en-US": `${activity}`},
                    "description": {"en-US": `${activity}`}
                },
                "objectType": "Activity"
            }
        }
    }

    //what gets rendered once user gets past login page
    render(){
        return(
            <div>
                {/* generic button: action = "clicked" */}
                <div>
                    <button value="clicked"
                            data-object="button"
                            data-description="Pressed submit button"
                            onClick={(event)=> this.sendAPIStatement(event)}>
                        Click here to send a sample xAPI statement
                    </button>
                </div>
                {/* video button: action = "watched" */}
                <div>
                    <iframe title="Experience API"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/y42MSS1DJqc"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                    />
                    <button value="watched"
                            data-object="xapi video"
                            data-description="Watched the Experience API video"
                            onClick={(event) => this.sendAPIStatement(event)}>
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
    
    {
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