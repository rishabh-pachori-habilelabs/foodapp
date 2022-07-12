import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors'
import styles from './styles'

const Header = () => {
	return (
			<SafeAreaView>
				<View style={ styles.headerWrapper }>
					<Image source={require('../../assets/images/user.png')} style={ styles.profileImage }/>
					<Feather name="menu" size={30} color={colors.textDark} />
				</View>
			</SafeAreaView>
	);
}

export default Header
