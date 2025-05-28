import {react} from 'react';
import {View,Text,TextIput,Image,Scrollview} from 'react-native';


const App=()=>{
    return(
        <Scrollview>
            <View>
                <Text>Welcome to the Jihustle</Text>
                <Text>Tujitume Mbele iko sawa</Text>
                <Image 
                source={{
                    uri:'https://images.app.goo.gl/3T22PdSR9hbKxFRj9',
                    style:{width:200,height:200}

                    }}/>
                    </View>
        </Scrollview>
    );
};
export default App;
