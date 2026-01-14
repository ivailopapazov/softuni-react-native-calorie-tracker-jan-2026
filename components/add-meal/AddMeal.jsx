import { Modal, Text, TextInput, View, StyleSheet } from "react-native";
import Button from "../common/Button";

export default function AddMeal({
    visible,
    onClose,
}) {
    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            transparent
        >
            <View style={styles.overlay}
            >
                <View style={styles.modal}>
                    <Text>Add Meal</Text>

                    <View>
                        <Text>Food Name</Text>
                        <TextInput placeholder="e.g. Pizza slice" />
                    </View>

                    <View>
                        <Text>Calories</Text>
                        <TextInput placeholder="0" keyboardType="number-pad" />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10}}>
                        <Button title="Back" type="secondary" />
                        <Button title="Add" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        justifyContent: 'space-between'
    },
})
