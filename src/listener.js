import CanvasBoard from "./CanvasBoard";

export function initCanvas(){
    console.log("--init canvas");
    let canvas = document.querySelector("#canvas");
    new CanvasBoard(canvas);
}


let eventBus = {};
 
(function(evtBus) {
    var evtList = {};
    var subUid = -1;

    evtBus.publish = function( evt, ...args ) {
 
        if ( !evtList[evt] ) {
            return false;
        }
 
        var subscribers = evtList[evt],
            len = subscribers ? subscribers.length : 0;
 
        while (len--) {
            subscribers[len].func(  ...args );
        }
 
        return this;
    };
 
    evtBus.subscribe = function( evt, func ) {
 
        if (!evtList[evt]) {
            evtList[evt] = [];
        }
 
        var token = ( ++subUid ).toString();
        evtList[evt].push({
            token: token,
            func: func
        });
        return token;
    };

    evtBus.unsubscribe = function( token ) {
        for ( var m in evtList ) {
            if ( evtList[m] ) {
                for ( var i = 0, j = evtList[m].length; i < j; i++ ) {
                    if ( evtList[m][i].token === token ) {
                        evtList[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( eventBus ));

export {eventBus};

