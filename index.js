/**
 * @file mofron-event-touchmove/index.js
 * @brief touchmove event for mofron
 * @license MIT
 */
module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @short
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("TouchMove");
	    //this.shortForm("");
            
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    /**
     * event contents
     * 
     * @param (mofron.class.dom) target dom object
     * @type private
     */
    contents (dom) {
        try {
	    let evt_obj = this;
            /* event contents */
            dom.getRawDom().addEventListener(
                'touchmove',
                (event) => {
                    event.preventDefault();
		    evt_obj.execListener(event);
                },
                { passive: false }
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
