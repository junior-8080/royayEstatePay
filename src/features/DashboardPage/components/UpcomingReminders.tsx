

const upcomingReminders = [
    { name: 'Sarah Johnson', amount: '1000', time: '2:00 PM', status: 'Success' },
    { name: 'Robert Wilson', amount: '100', time: '3:30 PM', status: 'Failed' },
    { name: 'Lisa Anderson', amount: '20', time: '6:00 PM', status: 'Success' },
    { name: 'Sarah Johnson', amount: '30', time: '2:00 PM', status: 'Pending' },
    { name: 'Robert Wilson', amount: '40', time: '3:30 PM', status: 'Success' },
    { name: 'Lisa Anderson', amount: '50', time: '6:00 PM', status: 'Success' }
];


const UpcomingReminders = () => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
        <div className="space-y-4">
            {upcomingReminders.map((reminder, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-900">{reminder.name}</p>
                        <p className="text-sm text-gray-600">GH₵{reminder.amount}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-medium text-blue-600">{reminder.status}</p>
                        <p className="text-xs text-gray-500">{reminder.time}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);


export default  UpcomingReminders