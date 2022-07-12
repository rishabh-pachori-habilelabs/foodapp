import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
	container: {
		/** For entire screen */
		flex: 1
	},
	titlesWrapper: {
		marginTop: 30,
		paddingHorizontal: 20
	},
	titlesSubtitle: {
		fontFamily: 'Montserrat-Regular',
		fontSize: 16,
		color: colors.textDark
	},
	titlesTitle: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 32,
		color: colors.textDark,
		marginTop: 5
	},
	searchWrapper: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		marginTop: 30,
		alignItems: 'center'
	},
	search: {
		flex: 1,
		marginLeft: 12,
		borderBottomWidth: 1,
		borderBottomColor: colors.textLight
	},
	searchText: {
		fontFamily: 'Montserrat-Semibold',
		fontSize: 14,
		marginBottom: 5,
		color: colors.textLight
	}
})

export default styles