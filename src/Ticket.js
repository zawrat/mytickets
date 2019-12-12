import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

// TODO make it functional again???
class Ticket extends Component {

    render() {
        const hasBackImage = this.props.data.imageBack !== undefined && this.props.data.imageBack !== '';
        let flipButton;

        if (hasBackImage) {
            flipButton = <button type="button"
            className='absolute right-0 bottom-0 bg-transparent grow-large bn outline-0 pointer'
            onClick={() => this.flippy.toggle()}><img alt='' src='assets/rotate_icon.png'></img></button>;
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
