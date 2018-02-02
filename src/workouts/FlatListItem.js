import React from "react";
import {
    StyleSheet,
    View,
    Alert,
    Text,
} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

export default class FlatListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeRowKey: null,
        };
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                this.setState({activeRowKey: null});
                if (this.state.activeRowKey != null) {
                    this.setState({activeRowKey: null});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert('Alert', 'Are you sure you want to delete?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    flatListData.splice(this.props.index, 1);
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                    //if (flatListData.valueOf().length == 0) {}
                                }},
                            ],
                            {cancelable: true}
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionID: 1,
        };
        return(
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                    height: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor:'black',
                    backgroundColor: this.props.index % 2 == 0 ? '#232E33': '#35454D'
                }}>
                    <Text style={styles.flatListItem}>{this.props.item.index}</Text>
                    <Text style={[styles.flatListItem, {fontWeight: 'bold'}]}>{this.props.item.name}</Text>
                    <Text style={styles.flatListItem}>{this.props.item.weight}</Text>
                    <Text style={styles.flatListItem}>{this.props.item.workoutSet}</Text>
                    <Text style={styles.flatListItem}>{this.props.item.repeat}</Text>
                </View>
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    },
});