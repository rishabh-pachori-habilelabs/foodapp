import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../Header';
import Categories from '../Categories';
import PopularItems from '../PopularItems';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors'
import styles from './styles'

const Home = ({ navigation }) => {
	return (
		<View style={ styles.container }>
			<ScrollView showsVerticalScrollIndicator={false}>

			{/* Header component */}
			<Header/>

			{/* Titles bar section */}
			<View style={styles.titlesWrapper}>
				<Text style={styles.titlesSubtitle}>Food</Text>
				<Text style={styles.titlesTitle}>Delivery</Text>
			</View>

			{/* Search bar section */}
			<View style={styles.searchWrapper}>
				<Feather name="search" size={16} color={colors.textDark} />
				<View style={styles.search}>
					<Text style={styles.searchText}>Search</Text>
				</View>
			</View>
			{/* Categories section */}
			<Categories />

			{/* Popular items section */}
			<PopularItems navigation={ navigation }/>
			</ScrollView>
		</View>
	);
}

export default Home
