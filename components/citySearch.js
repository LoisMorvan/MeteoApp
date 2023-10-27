import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class CitySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
        };
    }

    handleCityChange = (text) => {
        this.setState({ city: text });
    };

    handleSearch = () => {
        const { onSearch } = this.props;
        const { city } = this.state;
        onSearch(city);
    };

    render() {
        return (
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Enter city name"
                    onChangeText={this.handleCityChange}
                />
                <TouchableOpacity onPress={this.handleSearch} style={styles.searchIcon}>
                    <Icon name="search" size={25} color="black" />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'black',
        margin: 5,
        paddingBottom: 10,
        paddingTop: 5,
    },
    searchInput: {
        fontSize: 20,
        width: '85%',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 50,
        paddingLeft: 10,
        paddingBottom: 2,
        marginRight: 15,
        marginLeft: 5,
    },
    searchIcon: {
        paddingTop: 2,
        paddingRight: 5,
    },
});


export default CitySearch;
