import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Colors } from '../../Styles/Colors'
import { Button, Text, TextInput } from 'react-native-paper'
import { updateEmail, updateFirstname, updateLastname, updateLoginStatus } from '../../redux/User/User'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks/Hooks'
import { Routespath } from '../../Navigations/Routenames'


const Login:FC = ({navigation}) => {
    const dispatch = useAppDispatch()
    const firstname = useAppSelector(state => state.User.firstName)
    const lastName = useAppSelector(state => state.User.lastName)
    const email = useAppSelector(state => state.User.Email)
    


    const onSubmitLogin = ()=>{
        if(!!firstname || !!lastName ){
            dispatch(updateLoginStatus(true))
            navigation.navigate(Routespath.Home)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Text variant="displaySmall">Login</Text>
            <View style={styles.insideContainer}>
                <TextInput
                    label="First Name *"
                    value={firstname}
                    onChangeText={text => dispatch(updateFirstname(text))}
                    style={styles.TextInput}
                />
                <TextInput
                    label="Last Name *"
                    value={lastName}
                    onChangeText={text => dispatch(updateLastname(text))}
                    style={styles.TextInput}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => dispatch(updateEmail(text))}
                    style={styles.TextInput}
                />
                <Button
                    mode="contained"
                    buttonColor={Colors.DarkPurple}
                    style={{ marginTop: 24 }}
                    disabled={!firstname || !lastName }
                    onPress={onSubmitLogin}
                >
                    Login In
                </Button>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.litePurple,
        flex: 1,
        padding: 8,
        justifyContent: 'center',
        gap: 32
    },
    insideContainer: {
        backgroundColor: Colors.White,
        paddingHorizontal: 14,
        paddingTop: 64,
        paddingBottom: 32,
        gap: 8,
        borderRadius: 16
    },
    TextInput: {
        backgroundColor: Colors.White
    }

})