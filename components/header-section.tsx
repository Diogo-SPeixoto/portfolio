export function HeaderSection({title, subtitle}: {title: string, subtitle: string}) {
    return (
        <div className="text-center">
            <h2 className="font-semibold text-4xl mb-2">
                {title}
            </h2>
            <p className="text-sm text-[#757575]">
                {subtitle}
            </p>
      </div>
    )
}