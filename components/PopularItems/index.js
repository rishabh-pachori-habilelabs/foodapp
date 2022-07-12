import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { popularData } from '../../assets/data';
import styles from './styles'
import colors from '../../assets/colors'

const PopularItems = ({ navigation }) => {
	return (
		<View style={styles.popularItemsWrapper}>
			<Text style={styles.popularItemsTitle}>Popular Food Items</Text>
			{popularData.map((item) => (
				<TouchableOpacity
				key={item.id}
				onPress={() => navigation.navigate('Details', { item })
				}>
					<View
					style={[
						styles.popularItemsCardWrapper,
						{
							marginTop: item.id == 1 ? 10 : 20
						}
						]}>
							{/* Popular items card left section */}
							<View>
								<View>
									{/* Popular items top section in left */}
									<View style={styles.popularItemsTopWrapper}>
										<MaterialCommunityIcons
											name="crown"
											size={12}
											color={colors.primary}
										/>
										<Text style={styles.popularItemsTopText}>top of the week</Text>
									</View>
									{/* Popular items title section in left */}
									<View style={styles.popularItemsTitlesWrapper}>
											<Text style={styles.popularItemsTitle}> {item.title}</Text>
											<Text style={styles.popularItemsTitleWeight}> Weight {item.weight}</Text>
									</View>
								</View>
								{/* Popular items add item section */}
								<View style={styles.popularItemsCardBottom}>
									<View style={styles.popularItemAddButton}>
										<Feather name="plus" size={10} color={colors.textDark} />
									</View>
									<View style={styles.itemRatingWrapper}>
										<MaterialCommunityIcons
											name="star"
											size={10}
											color={colors.textDark}
										/>
										<Text style={styles.itemRating}>{item.rating}</Text>
									</View>
								</View>
							</View>
								{/* Popular items card right section */}
								<View style={styles.popularItemCardRight}>
									<Image source={item.image} style={styles.popularItemCardImage} />
								</View>
							</View>
						</TouchableOpacity>
					))}
				</View>
	);
}

export default PopularItems
