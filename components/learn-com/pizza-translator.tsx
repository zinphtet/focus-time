import React, { useState } from 'react'

import { View , TextInput , Text} from 'react-native'
const PizzaTranslator = () => {
    const [text , setText] = useState('')
  return (
    <div> 
        <View style={{
             backgroundColor : 'blue'
        }}>
            
            <TextInput placeholder='Enter something to translate'
              style={{
                  height : 40,
                  width : '100%',
                  backgroundColor : 'orange',
                  borderColor : 'red'
              }}
              defaultValue={text}
              onChangeText={newText => setText(newText)}
              >
                 
            </TextInput>
            
            <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
             
        </View>
        
    </div>
  )
}

export default PizzaTranslator