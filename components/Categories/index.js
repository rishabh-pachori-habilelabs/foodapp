import * as React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { categoriesData } from '../../assets/data';
import styles from './styles'
import colors from '../../assets/colors'

const Categories = () => {
	const renderCategoryItem = ({ item }) => {
		return (
			<View
				style={[
					styles.categoryItemWrapper,
					{
						backgroundColor: item.selected ? colors.primary : colors.white,
						marginLeft: item.id == 1 ? 20 : 0,
					},
				]}>
				<Image source={item.image} style={styles.categoryItemImage} />
				<Text style={styles.categoryItemTitle}>{item.title}</Text>
				<View
					style={[
						styles.categorySelectWrapper,
						{
							backgroundColor: item.selected ? colors.white : colors.secondary,
						},
					]}>
					<Feather
						name="chevron-right"
						size={8}
						style={styles.categorySelectIcon}
						color={item.selected ? colors.black : colors.white}
					/>
				</View>
			</View>
		);
	};
	return (
		<View style={styles.categoriesWrapper}>
			<Text style={styles.categoriesTitle}>Categories</Text>
			<View style={styles.categoriesListWrapper}>
				<FlatList
					data={categoriesData}
					renderItem={renderCategoryItem}
					keyExtractor={(item) => item.id}
					horizontal={true}
				/>
			</View>
		</View>
	);
}

export default Categories
