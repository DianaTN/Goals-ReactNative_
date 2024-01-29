import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ goal, onDeleteGoal }) {
    return (
        <Pressable
            onPress={() => {
                onDeleteGoal(goal.id)
            }}
        >
            <View style={styles.goalItem} >
                <Text style={styles.goalText}>{goal.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = new StyleSheet.create({
    goalItem: {
        padding: 20,
        backgroundColor: "#ade8f4",
        marginBottom: 10,
        borderRadius: 12,
    },
    goalText: {
        color: "black"
    }
})