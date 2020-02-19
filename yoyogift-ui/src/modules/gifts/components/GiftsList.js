// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableFooter from "@material-ui/core/TableFooter";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import { Button } from "@material-ui/core";
// import { List } from "react-virtualized";
// import GiftCard from "../../common/components/GiftCard";
// import { TablePaginationActionsWrapped } from "../../common/components/TablePaginationActionsWrapped";

// const styles = theme => ({
//   root: {
//     width: "90%",
//     margin: "2%",
//     padding: "1%"
//   },
//   table: {
//     minWidth: 100
//   },
//   tableWrapper: {
//     overflow: "hidden"
//   }
// });

// export class GiftsList extends React.Component {
//   state = {
//     giftCardsFiltered: this.props.giftCardsFiltered,
//     page: 0,
//     rowsPerPage: 10
//   };

//   rowRenderer = ({
//     key, // Unique key within array of rows
//     index, // Index of row within collection
//     isScrolling, // The List is currently being scrolled
//     isVisible, // This row is visible within the List (eg it is not an overscanned row)
//     style // Style object to be applied to row (to position it)
//   }) => {
//     let { giftCardsFiltered, userDetails } = this.props;
//     return (
//       <div key={key} style={style}>
//         <Grid container spacing={16}>
//           <p>{index}</p>
//           <Grid item xs={12} sm={6} md={3} lg={3}>
//             <GiftCard
//               giftCard={giftCardsFiltered[index]}
//               userEmail={userDetails.email}
//             />
//             {userDetails.email === "lathak95@gmail.com" ||
//             this.props.userDetails.email === "yoyogiftg2@gmail.com" ? (
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() =>
//                   this.props.handleUpdateClick(giftCardsFiltered[index].id)
//                 }
//               >
//                 UPDATE
//               </Button>
//             ) : null}
//           </Grid>
//         </Grid>
//       </div>
//     );
//   };

//   // handleChangePage = (event, page) => {
//   //   this.setState({ page });
//   // };

//   // handleChangeRowsPerPage = event => {
//   //   this.setState({ page: 0, rowsPerPage: event.target.value });
//   // };

//   render() {
//     // let { classes, giftCardsFiltered, userDetails } = this.props;
//     // const { rowsPerPage, page } = this.state;
//     // const emptyRows =
//     //   rowsPerPage -
//     //   Math.min(rowsPerPage, giftCardsFiltered.length - page * rowsPerPage);
//     let { giftCardsFiltered } = this.props;
//     return (
//       // <Paper className={classes.root}>
//       //   <div className={classes.tableWrapper}>
//       //     <Table className={classes.table}>
//       //       <TableBody>
//       //         <Grid container spacing={16}>
//       //           {giftCardsFiltered
//       //             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//       //             .map(giftCard => {
//       //               return (
//       //                 <Grid item xs={12} sm={6} md={3} lg={3}>
//       //                   <GiftCard
//       //                     giftCard={giftCard}
//       //                     userEmail={userDetails.email}
//       //                   />
//       //                   {/* {(userDetails.email === "lathak95@gmail.com" || this.props.userDetails.email === "yoyogiftg2@gmail.com")? <Button variant="contained" color="primary" onClick={()=> this.props.handleUpdateClick(giftCard.id)}>UPDATE</Button> : null} */}
//       //                 </Grid>
//       //               );
//       //             })}
//       //         </Grid>
//       //         {emptyRows > 0 && (
//       //           <TableRow style={{ height: 48 * emptyRows }}>
//       //             <TableCell colSpan={6} />
//       //           </TableRow>
//       //         )}
//       //       </TableBody>
//       //       <TableFooter>
//       //         <TableRow>
//       //           <TablePagination
//       //             rowsPerPageOptions={[10, 20]}
//       //             colSpan={3}
//       //             count={giftCardsFiltered.length}
//       //             rowsPerPage={rowsPerPage}
//       //             page={page}
//       //             SelectProps={{
//       //               native: true
//       //             }}
//       //             onChangePage={this.handleChangePage}
//       //             onChangeRowsPerPage={this.handleChangeRowsPerPage}
//       //             ActionsComponent={TablePaginationActionsWrapped}
//       //             props
//       //           />
//       //         </TableRow>
//       //       </TableFooter>
//       //     </Table>
//       //   </div>
//       // </Paper>
//       <div alignItems="center">
//         <List
//           width={1000}
//           height={600}
//           rowHeight={315}
//           rowRenderer={this.rowRenderer}
//           rowCount={giftCardsFiltered.length}
//         />
//       </div>
//     );
//   }
// }

// GiftsList.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(GiftsList);

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { List } from "react-virtualized";
import { Button } from "@material-ui/core";
import GiftCard from "../../common/components/GiftCard";
import { TablePaginationActionsWrapped } from "../../common/components/TablePaginationActionsWrapped";

const styles = theme => ({
  root: {
    width: "90%",
    margin: "2%",
    padding: "1%"
  },
  table: {
    minWidth: 100
  },
  tableWrapper: {
    overflow: "hidden"
  }
});

class GiftsList extends React.Component {
  state = {
    giftCardsFiltered: this.props.giftCardsFiltered,
    searchedCard: this.props.searchedCard,
    page: 0,
    rowsPerPage: 10
  };
  rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style // Style object to be applied to row (to position it)
  }) => {
    let { giftCardsFiltered, searchedCard, userDetails } = this.props;
    return (
      <div key={key} style={style}>
        {searchedCard
          // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(giftCard => {
            return (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <GiftCard giftCard={giftCard} userEmail={userDetails.email} />
                {/* {(userDetails.email === "lathak95@gmail.com" || this.props.userDetails.email === "yoyogiftg2@gmail.com")? <Button variant="contained" color="primary" onClick={()=> this.props.handleUpdateClick(giftCard.id)}>UPDATE</Button> : null} */}
              </Grid>
            );
          })}
      </div>
    );
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render() {
    let { classes, giftCardsFiltered, userDetails, searchedCard } = this.props;
    // const { rowsPerPage, page } = this.state;
    // const emptyRows =
    //   rowsPerPage -
    //   Math.min(rowsPerPage, searchedCard.length - page * rowsPerPage);
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody>
              <Grid container spacing={16}>
                <List
                  width={1000}
                  height={600}
                  rowHeight={315}
                  rowRenderer={this.rowRenderer}
                  rowCount={giftCardsFiltered.length}
                />
              </Grid>
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 20]}
                  colSpan={3}
                  count={giftCardsFiltered.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                  props
                />
              </TableRow>
            </TableFooter> */}
          </Table>
        </div>
      </Paper>
    );
  }
}

GiftsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiftsList);
