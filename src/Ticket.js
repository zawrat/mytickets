import React, { Component } from 'react';

class Ticket extends Component {
    constructor() {
        super();

        this.state = {
            showBack: false
        }
    }

    showBackImage = () => {
        this.setState( { showBack: !this.state.showBack} )
    }

    render() {
        return (
            <div className='bg-light-blue dib grow br3 pa2 ma3 bw2 shadow-5 tc' onClick = { this.showBackImage }>
                <img alt = '' src={ this.state.showBack ? this.props.data.imageBack : this.props.data.imageFront }></img>
            </div>
          );
    }
}

export default Ticket;
