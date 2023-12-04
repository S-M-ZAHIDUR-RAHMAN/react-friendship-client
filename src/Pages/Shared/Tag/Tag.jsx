/* eslint-disable react/prop-types */

const Tag = ({eachTag}) => {
    const{tag} = eachTag;
    return (
        <div className="card w-50% border-0 border-b-4 text-xl bg-slate-300 font-bold shadow-xl">
            <div className="p-2">
                <p>{tag}</p>
            </div>
        </div>

    );
};

export default Tag;