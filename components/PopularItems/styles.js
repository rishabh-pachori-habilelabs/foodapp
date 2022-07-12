import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
	popularItemsWrapper: {
		paddingHorizontal: 20
	},
	popularItemsTitle: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 16
	},
	popularItemsCardWrapper: {
		backgroundColor: colors.white,
		borderRadius: 25,
		paddingTop: 20,
		paddingLeft: 20,
		flexDirection: 'row',
		overflow: 'hidden'
		// shadowColor: colors.black,
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2
		// },
		// shadowOpacity: 0.05,
		// shadowRadius: 10,
		// elevation: 2
	},
	popularItemsTopWrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	popularItemsTopText: {
		marginLeft: 10,
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 14
	},
	popularItemsTitlesWrapper: {
		marginTop: 20
	},
	popularItemsTitle: {
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 14,
		color: colors.textDark
	},
	popularItemsTitleWeight: {
		fontFamily: 'Montserrat-Medium',
		fontSize: 12,
		color: colors.textLight,
		marginTop: 5
	},
	popularItemsCardBottom: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		marginLeft: -20
	},
	popularItemAddButton: {
		backgroundColor: colors.primary,
		paddingHorizontal: 40,
		paddingVertical: 20,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 25
	},
	itemRatingWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 20
	},
	itemRating: {
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 12,
		color: colors.textDark,
		marginLeft: 5
	},
	popularItemCardRight: {
		marginLeft: 40
	},
	popularItemCardImage: {
		width: 210,
		height: 125,
		resizeMode: 'contain'
	}
})

export default styles
