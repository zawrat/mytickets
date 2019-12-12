import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


// TODO make it functional again???
class Ticket extends Component {
    constructor() {
        super();
    }

    render() {
        const hasBackImage = this.props.data.imageBack !== undefined && this.props.data.imageBack !== '';
        let flipButton;

        if (hasBackImage) {
            flipButton = <button type="button" className='absolute right-0 bottom-0' onClick={() => this.flippy.toggle()}>Toggle Me!</button>;
        }

        return (
            <div className='dib ma3'>
                <Flippy flipOnHover={false}
                    flipOnClick={false}
                    flipDirection="horizontal"
                    ref={(r) => this.flippy = r}>
                    <FrontSide className='shadow-5 br3 pa0'>
                        <img alt='' src={this.props.data.imageFront}></img>
                        {flipButton}
                    </FrontSide>
                    <BackSide className='shadow-5 br3 pa0'>
                        <img alt='' src={this.props.data.imageBack}></img>
                        {flipButton}
                    </BackSide>
                </Flippy>
            </div>
        );
    }
}

export default Ticket;
