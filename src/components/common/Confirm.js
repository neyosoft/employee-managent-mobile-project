import React from 'react';
import { Text, View, Modal } from 'react-native';
import {Button} from './Button';
import {CardSection} from './CardSection';

const Confirm = ({children, onAccept, onDecline, visible}) => {

    const { containerStyle, cardSectionStyle, textStyle } = styles;
    
    return (
        <Modal 
            transparent
            visible = {visible}
            animationType = "slide"
            onRequestClose = { () => {} }
        >

            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onClick={onAccept}>Yes</Button>
                    <Button onClick={onDecline}>No</Button>
                </CardSection>
            </View>

            
        </Modal>
    )
};


const styles = {
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    
    cardSectionStyle: {
        justifyContent: 'center'
    },

    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    }
}

export { Confirm };