import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Corprates from "./pages/Corprates";
import LevelStructure from "./pages/LevelStructure";
import ChartOfAccount from "./pages/ChartOfAccount";
import CostCenter from "./pages/CostCenter";
import FinancialPeriod from "./pages/FinancialPeriod";
import JournalEntry from "./pages/JournalEntry";
import AddJournalEntry from "./pages/AddJournalEntry";
import Archive from "./pages/Archive";
import Remarks from "./pages/Remarks";
import EditJournalEntryUnposted from "./pages/EditJournalEntryUnposted";
import EditJournalEntryPosted from "./pages/EditJournalEntryPosted";
import JournalDetails from "./pages/JournalDetails";
import ManageSystemUsers from "./pages/ManageSystemUsers";
import AssignFeatures from "./pages/AssignFeatures";
import AssignCorporates from "./pages/AssignCorporates";
import Categories from "./pages/Categories";
import ClosingEntry from "./pages/ClosingEntry";
import ExchangeRateAndCurrency from "./pages/ExchangeRateAndCurrency";
import AppLayout from "./components/AppLayout";
import ChangePass from "./components/ChangePassForm";
import PageNotFound from "./pages/PageNotFound";
import AddCorporateForm from "./components/AddCorporateForm";
import EditCorporateForm from "./components/EditCorporateForm";
import CorporateDetails from "./components/CorporateDetails";
import { Toaster } from "react-hot-toast";

function App() {
  let { corporateId } = useParams();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/corporates" element={<Corprates />} />
            <Route path="/corporates/add" element={<AddCorporateForm />} />
            <Route
              path="/corporates/edit/:corporateId"
              element={<EditCorporateForm />}
            />
            <Route
              path="/corporates/details/:corporateId"
              element={<CorporateDetails />}
            />
            <Route path="/levelstructure" element={<LevelStructure />} />
            <Route path="/chartofacc" element={<ChartOfAccount />} />
            <Route path="/costcenter" element={<CostCenter />} />
            <Route path="/financialperiod" element={<FinancialPeriod />} />
            <Route path="/journalentry" element={<JournalEntry />} />
            <Route
              path="/journalentry/addjournalentry"
              element={<AddJournalEntry />}
            />
            <Route path="journalentry/archive" element={<Archive />} />
            <Route path="journalentry/remarks" element={<Remarks />} />
            <Route
              path="/journalentry/editjournalentryposted"
              element={<EditJournalEntryPosted />}
            />
            <Route
              path="/journalentry/editjournalentryunposted"
              element={<EditJournalEntryUnposted />}
            />
            <Route
              path="/journalentry/journaldetails"
              element={<JournalDetails />}
            />
            <Route path="/managesystemusers" element={<ManageSystemUsers />} />
            <Route path="/assignfeatures" element={<AssignFeatures />} />
            <Route path="/assigncorporates" element={<AssignCorporates />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/closingentry" element={<ClosingEntry />} />
            <Route
              path="/exchangerateandcurrency"
              element={<ExchangeRateAndCurrency />}
            />
          </Route>
          <Route index element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpass" element={<ForgetPassword />} />
          <Route path="/resetpass" element={<ResetPassword />} />
          <Route path="/changepass" element={<ChangePass />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
          },
        }}
      />
    </>
  );
}

export default App;
