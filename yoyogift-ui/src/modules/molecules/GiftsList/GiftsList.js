import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GiftCard from "../../atoms/GiftCard/GiftCard";
import { List, AutoSizer } from "react-virtualized";
const styles = theme => ({
  root: {
    width: "20%",
    margin: "1%",
    padding: "1%",
    float: "left",
    [theme.breakpoints.down("sm")]: {
      // padding: "7%",
      width: "30%"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "7%",
      width: "80%"
    }
  },
  table: {
    minWidth: 100
  },
  tableWrapper: {
    overflow: "hidden"
  }
});

export class GiftsList extends React.PureComponent {
  state = {
    searchedCard: this.props.searchedCard
  };
  render() {
    let { searchedCard, userDetails, classes } = this.props;

    return (
      <div style={{ marginTop: "10px", height: "80vh" }}>
        <AutoSizer>
          {({ height, width }) => {
            const itemsPerRow = Math.floor(width / 300) || 1;
            const rowCount = Math.ceil(searchedCard.length / itemsPerRow);
            return (
              <div>
                <List
                  width={width}
                  height={height}
                  rowCount={rowCount}
                  rowHeight={340}
                  rowRenderer={({ index, key, style }) => {
                    const items = [];
                    const fromIndex = index * itemsPerRow;
                    const toIndex = Math.min(
                      fromIndex + itemsPerRow,
                      searchedCard.length
                    );

                    for (let i = fromIndex; i < toIndex; i++) {
                      items.push(
                        <div className={classes.root} key={i}>
                          <GiftCard
                            giftCard={searchedCard[i]}
                            userEmail={userDetails.email}
                          />
                        </div>
                      );
                    }

                    return (
                      <div className={classes.item} key={key} style={style}>
                        {items}
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}

GiftsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiftsList);
