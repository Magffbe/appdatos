import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

const ApiList = () => {
    const [data, setData,] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async () =>{
        try{
            const response = await axios.get(
                `https://api.github.com/search/repositories?q=${searchQuery}`
            );
            setData(response.data.items);
    
        }catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchQuery]);

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
        </View>
    );

    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="Buscar repositorios..."
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
            />
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            />  
        </View>
        );

     };

     const styles = StyleSheet.create({
        input: {
            heigth: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            marginBottom: 10,
        },
        item: {
            borderBottomWidth: 1,
            borderColor: '#ccc',
            padding: 10,
        },

     });

     export default ApiList;