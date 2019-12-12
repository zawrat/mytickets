import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

class Ticket extends Component {
    constructor() {
        super();

        this.state = {
            showBack: false
        }
    }

    showBackImage = () => {
        if (this.props.data.imageBack !== undefined && this.props.data.imageBack !== '') {
            this.setState( { showBack: !this.state.showBack} )
        }
    }

    render() {
        return (
            <div className='dib br3 ma3 bw2 shadow-5 tc' onClick = { this.showBackImage }>
                <ReactCardFlip isFlipped={this.state.showBack} flipSpeedBackToFront = {0.5}>
                    <div>
                        <img alt = '' src={ this.props.data.imageFront }></img>
                    </div>

                    <div>
                        <img alt = '' src={ this.props.data.imageBack }></img>
                    </div>
                </ReactCardFlip>
            </div>
          );
    }
}

export default Ticket;
