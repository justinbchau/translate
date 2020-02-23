import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

export default class Button extends Component {

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => 
                <button className={`ui ${color} button`}>
                    <LanguageContext.Consumer>
                        {({ language }) => this.renderSubmit(language)}
                    </LanguageContext.Consumer>
                </button>
                }
                
            </ColorContext.Consumer>
        )
    }
}
