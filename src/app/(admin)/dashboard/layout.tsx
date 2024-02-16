const LayoutDashboard = ({
  children,
  product,
  analytics,
  payment,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
  analytics: React.ReactNode;
  payment: React.ReactNode;
}) => {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="flex w-full justify-center gap-2">
        <div className="mt-5 flex-1 ">{product}</div>
        <div className="flex-1 mt-5">{analytics}</div>
      </div>
      <div className="flex-1 mt-5">{payment}</div>
    </div>
  );
};

export default LayoutDashboard;
