import { useRoutes } from "react-router-dom";
import {
  NoMatch,
  CorporateHome,
  IndividualHome,
  BrandHome,
  VerifyPhone,
  VerifyHome,
  VerifyAccount,
  VerificationComplete,
  ResetComplete,
  ResetEmail,
  ResetPasscode,
  ResetPhone,
  ForgetPasscode,
  SignIn,
  GeneralHome,
  OverviewHome,
  NewTask,
  AdvocateOverview,
  NewAdvocate,
  TaskAnalysis,
  Profile,
  RewardsOverview,
} from "./Pages";
import { AuthLayout, DashboardLayout, VerificationLayout } from "./layout";

const Router = () => {
  let routes = [
    { path: "*", element: <NoMatch /> },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { index: true, element: <CorporateHome /> },
        { path: "individual", element: <IndividualHome /> },
        { path: "brand", element: <BrandHome /> },
      ],
    },
    {
      path: "/",
      element: <VerificationLayout />,
      children: [
        { path: "phone", element: <VerifyPhone /> },
        { path: "complete", element: <VerificationComplete /> },
        { path: "account", element: <GeneralHome /> },
        { path: "signin", element: <SignIn /> },
        { path: "forget-passcode", element: <ForgetPasscode /> },
        { path: "reset-email", element: <ResetEmail /> },
        { path: "reset-phone", element: <ResetPhone /> },
        { path: "reset-passcode", element: <ResetPasscode /> },
        { path: "reset-complete", element: <ResetComplete /> },
      ],
    },
    {
      path: "/verification",
      element: <VerificationLayout />,
      children: [
        { index: true, element: <VerifyHome /> },
        { path: "phone", element: <VerifyPhone /> },
        { path: "complete", element: <VerificationComplete /> },
        { path: "account", element: <VerifyAccount /> },
      ],
    },
    {
      path: "/app",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <OverviewHome /> },
        { path: "new-task", element: <NewTask /> },
        { path: "advocate", element: <AdvocateOverview /> },
        { path: "advocate/new", element: <NewAdvocate /> },
        { path: "analysis", element: <TaskAnalysis /> },
        { path: "profile", element: <Profile /> },
        { path: "rewards", element: <RewardsOverview /> },
        { path: "wallet", element: <NoMatch /> },
        { path: "logout", element: <NoMatch /> },
      ],
    },
  ];
  let element = useRoutes(routes);
  return element;
};

export default Router;
