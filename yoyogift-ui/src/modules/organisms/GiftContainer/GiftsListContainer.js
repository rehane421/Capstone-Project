import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GiftsList from "../../molecules/GiftsList/GiftsList";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  fetchCards,
  fetchCard,
  fetchCardFilter,
  fetchCardSearch
} from "../../state/actions/giftsAction";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import AscendingButton from "@material-ui/icons/SwapVert";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DescendingButton from "@material-ui/icons/SwapVerticalCircle";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import history from "../../util/history";
import { DebounceInput } from "react-debounce-input";
import { adminEmail } from "../../../config/constants";
// import * as _ from "underscore";
import {
  comparePointsAsc,
  comparePointsDesc,
  compareCountAsc,
  compareCountDesc,
  compareValidityAsc,
  compareValidityDesc
} from "../../util/CompareForSort";

const sortCategoryArray = ["Points", "Count", "Validity"];
export class GiftsListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: true, //true - ascending order
      sortByValue: "None",
      filterValue: "All"
    };
    // this.handleInputThrottled = _.throttle(this.onSearchChange, 1000);
  }
  componentDidMount() {
    this.props.fetchCards();
  }

  handleSortButtonClick = () => {
    const e = {
      target: {
        value: this.state.sortByValue
      }
    };
    this.onChangeSort(e);
    this.setState({ sortOrder: !this.state.sortOrder });
  };

  onChangeRetailer = e => {
    const selectedValue = e.target.value;
    this.setState({
      filterValue: e.target.value
    });
    let newGiftCard = [];
    if (selectedValue !== "All") {
      this.props.giftCards.forEach(element => {
        if (element.cardRetailer === selectedValue) {
          newGiftCard.push(element);
        }
      });
    } else {
      newGiftCard = this.props.giftCards;
    }
    this.props.fetchCardFilter(newGiftCard);
  };

  onSearchChange = e => {
    console.log("on search");
    let searchData = e.target.value;
    let newSearchCard = this.props.giftCardsFiltered;
    newSearchCard = newSearchCard.filter(function(card) {
      return (
        card.cardName.toLowerCase().search(searchData.toLowerCase()) !== -1
      );
    });
    this.props.fetchCardSearch(newSearchCard);
  };

  onChangeSort = e => {
    const { sortOrder } = this.state;
    const giftCards =
      this.state.filterValue === "All"
        ? this.props.giftCards
        : this.props.giftCardsFiltered;
    this.setState({
      sortByValue: e.target.value,
      sortOrder: !this.state.sortOrder
    });
    let newGiftCard = giftCards;
    if (e.target.value !== "None") {
      switch (e.target.value) {
        case "Points":
          newGiftCard = sortOrder
            ? giftCards.sort(comparePointsAsc)
            : giftCards.sort(comparePointsDesc);
          break;
        case "Count":
          newGiftCard = sortOrder
            ? giftCards.sort(compareCountAsc)
            : giftCards.sort(compareCountDesc);
          break;
        case "Validity":
          newGiftCard = sortOrder
            ? giftCards.sort(compareValidityAsc)
            : giftCards.sort(compareValidityDesc);
          break;
        default:
      }
    }
    this.props.fetchCardFilter(newGiftCard);
  };

  addUpdateForm = () => {
    history.push("/AddUpdateForm");
  };

  render() {
    if (this.props.giftCards.length === 0) {
      return (
        <CircularProgress style={{ marginLeft: "50%", marginTop: "10%" }} />
      );
    }
    let cardRetailerArray = [];
    for (let i = 0; i < this.props.giftCards.length; i++) {
      cardRetailerArray.push(this.props.giftCards[i].cardRetailer);
    }
    let uniqueCardRetailerArray = [...new Set(cardRetailerArray)];
    return (
      <React.Fragment>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <label style={{ marginLeft: "2%" }}>Filter by Retailer:</label>
            <Select
              style={{
                marginLeft: "2%",
                marginTop: "2%",
                width: "100px",
                height: "35px"
              }}
              native
              onChange={this.onChangeRetailer}
              input={<OutlinedInput labelWidth={0} name="kpiValue" />}
            >
              <option value="All">All</option>
              {uniqueCardRetailerArray.map(option => {
                return <option value={option}>{option}</option>;
              })}
            </Select>
          </Grid>
          <Grid item xs={12} sm={3}>
            <label style={{ marginLeft: "2%" }}>Sort by:</label>
            <Select
              style={{
                marginLeft: "2%",
                marginTop: "2%",
                marginRight: "2%",
                width: "100px",
                height: "35px"
              }}
              native
              onChange={this.onChangeSort}
              input={<OutlinedInput labelWidth={0} name="sortByValue" />}
            >
              <option value="None">None</option>
              {sortCategoryArray.map(option => {
                return <option value={option}>{option}</option>;
              })}
            </Select>
            {this.state.sortOrder ? (
              <Tooltip
                title={
                  this.state.sortByValue === "Validity"
                    ? "Oldest to Newest"
                    : "Low to High"
                }
              >
                <IconButton
                  onClick={this.handleSortButtonClick}
                  disabled={this.state.sortByValue === "None"}
                >
                  <AscendingButton />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip
                title={
                  this.state.sortByValue === "Validity"
                    ? "Newest to Oldest"
                    : "High to Low"
                }
              >
                <IconButton onClick={this.handleSortButtonClick}>
                  <DescendingButton />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
          <Grid item xs={12} sm={3}>
            {adminEmail.includes(this.props.userDetails.email) ? (
              <Button
                style={{ marginTop: "2%", marginRight: "3%", marginLeft: "2%" }}
                variant="contained"
                color="primary"
                onClick={this.addUpdateForm}
              >
                ADD CARD
              </Button>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={3}>
            <span>Search</span>
            <DebounceInput
              style={{ borderRadius: "5px", height: "25px", marginTop: "10px" }}
              minLength={2}
              debounceTimeout={500}
              onChange={this.onSearchChange}
            />
          </Grid>
        </Grid>

        <div style={{ textAlign: "center" }}>
          <GiftsList
            {...this.props}
            handleClickCard={this.handleClickCard}
            handleUpdateClick={this.handleUpdateClick}
          />
        </div>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return {
    giftCards: state.gifts.giftCards,
    giftCardsFiltered: state.gifts.giftCardsFiltered,
    searchedCard: state.gifts.searchedCard,
    userDetails: state.login.detailsObject
  };
};

GiftsListContainer.propTypes = {
  classes: PropTypes.object
};

export default connect(mapStateToProps, {
  fetchCards,
  fetchCard,
  fetchCardFilter,
  fetchCardSearch
})(GiftsListContainer);
