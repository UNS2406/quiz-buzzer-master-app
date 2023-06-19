/* The above class is a React Native component that displays a "RESET" button and resets a Firebase
database when pressed. */

/* These lines of code are importing necessary modules and dependencies for the React Native component. */
import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import db from "./config";

export default class App extends Component {
  /**
   * This is a constructor function that initializes the state of a component with an empty array for
   * teamsRankList.
   */
  constructor() {
    super();
    this.state = {
      teamsRankList: [],
    };
  }

  /* The `showTeamRanks` function is retrieving data from a Firebase database reference to the 'teams'
node. It then loops through each team in the list and checks if the 'isButtonPressed' property is
true. If it is, it adds the team to a new array called `sortedTeamList`. The function then sorts the
`sortedTeamList` array based on the 'timestamp' property of each team object. Finally, it sets the
state of the component with the sorted array using `setState`. */
  showTeamRanks = () => {
    /* `var sortedTeamList = [];` is initializing an empty array called `sortedTeamList`. This array will
be used to store the teams that have their `isButtonPressed` property set to true and will be sorted
based on their `timestamp` property. The array is initialized to an empty state before the
`showTeamRanks` function retrieves data from the Firebase database and starts populating it with the
relevant teams. */
    var sortedTeamList = [];
    /* `var teamsDataFromDB = db.ref('teams/');` is creating a reference to the 'teams' node in a
    Firebase database using the `ref()` method of the `db` object. */

    var teamsDataFromDB = db.ref("TEAMS/");
    teamsDataFromDB.on("value", (data) => {
      var list = data.val();
      for (var eachTeam in list) {
        /* This code block is checking if the 'isButtonPressed' property of each team object in the
       'teams' node of the Firebase database is true. If it is true, it adds the team object to a
       new array called 'sortedTeamList'. Additionally, it sets the 'teamName' property of the team
       object to the name of the team (which is stored as the key of the object in the Firebase
       database). This code block is essentially filtering out the teams that have not had their
       button pressed and creating a new array of the teams that have had their button pressed,
       along with their team name and other properties. */
        if (list[eachTeam]["ISBUZZERPRESSED"] === true) {
          list[eachTeam]["TEAMNAME"] = eachTeam;
          sortedTeamList.push(list[eachTeam]);
        }
      }
      /* `sortedTeamList.sort(function(teamA, teamB){ return teamA.timestamp - teamB.timestamp; })` is
   sorting the `sortedTeamList` array based on the `timestamp` property of each team object. It is
   using the `sort()` method of the array object and passing in a comparison function as an
   argument. The comparison function takes two parameters, `teamA` and `teamB`, which represent two
   team objects in the array. The function subtracts the `timestamp` property of `teamB` from the
   `timestamp` property of `teamA`. If the result is negative, it means that `teamA` has a more
   recent `timestamp` than `teamB`, so `teamA` should come before `teamB` in the sorted array. If
   the result is positive, it means that `teamB` has a more recent `timestamp` than `teamA`, so
   `teamB` should come before `teamA` in the sorted array. If the result is zero, it means that both
   teams have the same `timestamp`, so their order in the sorted array doesn't matter. */
      sortedTeamList.sort(function (teamA, teamB) {
        return teamA.TIMESTAMP - teamB.TIMESTAMP;
      });
      /* After sorting the `sortedTeamList` array, `this.setState({teamsRankList : sortedTeamList})` is
      setting the state of the component with the sorted array. This means that the `teamsRankList`
      state variable will now hold the sorted array. */
      this.setState({ teamsRankList: sortedTeamList });
      /* `sortedTeamList = [];` is empyting the data array so it can be available for next round and 
      not store the previous round's data which will distort results for next rounds 
       */
      sortedTeamList = [];
    });
  };

  /* The `resetDB` function is resetting the Firebase database by setting the 'teams' node to a new
object with each team's 'isButtonPressed' property set to false, 'timestamp' property set to 0, and
'enabled' property set to true. This effectively resets the state of the teams in the database to
their initial values. */
  resetDB = () => {
    db.ref("TEAMS/").set({
      red: {
        TEAMNAME:'red',
        ISBUZZERPRESSED: false,
        TIMESTAMP: 0,
        ENABLED: true,
      },
      green: {
        TEAMNAME:'green',
        ISBUZZERPRESSED: false,
        TIMESTAMP: 0,
        ENABLED: true,
      },
      yellow: {
        TEAMNAME:'yellow',
        ISBUZZERPRESSED: false,
        TIMESTAMP: 0,
        ENABLED: true,
      },
      blue: {
        TEAMNAME:'blue',
        ISBUZZERPRESSED: false,
        TIMESTAMP: 0,
        ENABLED: true,
      },
    });
  };

/**
 * The `componentDidMount()` function calls the `showTeamRanks()` function.
 */
  /* `componentDidMount` is a lifecycle method in React that is called after a component is mounted
  (i.e., inserted into the DOM). In this code, the `componentDidMount` function is calling the
  `showTeamRanks` function, which retrieves data from a Firebase database and sets the state of the
  component with the sorted array of teams that have had their button pressed. This means that when
  the component is mounted, the list of teams will be displayed in the app. */
  componentDidMount() {
    this.showTeamRanks();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
        { /* This code is rendering a list of team names and displaying them in a styled `View`
         component. It is using the `map()` method to loop through each team object in the
         `teamsRank` array (which is stored in the component's state) and creating a new `View`
         component for each team. The `View` component has a set of styles applied to it, including
         a background color that is set to the team's name (which is stored in the `teamName`
         property of the team object). The team name is also displayed in uppercase letters using a
         `Text` component. The resulting list of team name `View` components is then rendered in the
         main `View` component of the app. */}
          {this.state.teamsRankList.map((item) => (
            <View
              style={{
                width: 140,
                height: 55,
                borderWidth: 2,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: item.TEAMNAME,
              }}
            >
              <Text>{item.TEAMNAME.toUpperCase()}</Text>
            </View>
          ))}
        </View>
        <Button
          title="RESET"
          style={{ width: 100, height: 100 }}
          onPress={this.resetDb}
        />
      </View>
    );
  }
}
