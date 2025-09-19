import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import TransactionsPage from "@/features/TransactionsPage/TransactionsPage";

const page = async () => {
  return (
    <PageLayout>
      <TransactionsPage />
    </PageLayout>
  );
};

export default page;
