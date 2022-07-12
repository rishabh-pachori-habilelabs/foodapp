import * as React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors';
import styles from './styles';

const Details = ({ route, navigation }) => {
	const { item } = route.params

	const renderIngredientsItem = ({ item }) => {
		return (
			<View
				style={[
					styles.ingredientItemWrapper,
					{
						marginLeft: item.id === '1' ? 20 : 0,
					},
				]}>
				<Image source={item.image} style={styles.ingredientImage} />
			</View>
		);
	};

	return (
		<View style={styles.container}>
			{/* Header */}
			<SafeAreaView>
				<View style={styles.headerWrapper}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<View style={styles.headerLeft}>
							<Feather name="chevron-left" size={12} color={colors.textDark} />
						</View>
					</TouchableOpacity>
					<View style={styles.headerRight}>
						<MaterialCommunityIcons
							name="star"
							size={12}
							color={colors.white}
						/>
					</View>
				</View>
			</SafeAreaView>

			{/* Titles */}
			<View style={styles.titlesWrapper}>
				<Text style={styles.title}>{item.title}</Text>
			</View>

			{/* Price */}
			<View style={styles.priceWrapper}>
				<Text style={styles.priceText}>₹{item.price}</Text>
			</View>

			{/* Items info */}
			<View style={styles.infoWrapper}>
				<View style={styles.infoLeftWrapper}>
					<View style={styles.infoItemWrapper}>
						<Text style={styles.infoItemTitle}>Size</Text>
						<Text style={styles.infoItemText}>
							{item.sizeName} {item.sizeNumber}"
						</Text>
					</View>
					<View style={styles.infoItemWrapper}>
						<Text style={styles.infoItemTitle}>Crust</Text>
						<Text style={styles.infoItemText}>{item.crust}</Text>
					</View>
					<View style={styles.infoItemWrapper}>
						<Text style={styles.infoItemTitle}>Delivery in</Text>
						<Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
					</View>
				</View>
				<View>
					<Image source={item.image} style={styles.itemImage} />
				</View>
			</View>

			{/* Ingredients */}
			<View style={styles.ingredientsWrapper}>
				<Text style={styles.ingredientsTitle}>Ingredients</Text>
				<View style={styles.ingredientsListWrapper}>
					<FlatList
						data={item.ingredients}
						renderItem={renderIngredientsItem}
						keyExtractor={(item) => item.id}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			</View>

			{/* Place an order */}
			<TouchableOpacity onPress={() => alert('Your order has been placed!')}>
				<View style={styles.orderWrapper}>
					<Text style={styles.orderText}>Place an order</Text>
					<Feather name="chevron-right" size={18} color={colors.black} />
				</View>
			</TouchableOpacity>
		</View>
	);
}

export default Details