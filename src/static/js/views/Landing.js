import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("هواپیمایی شریف | خانه");
    }

    async getHtml() {
        return `
        <main class="mx-auto w-full max-w-[1200px] px-8">
            <section class="card-box p-16 flex flex-col items-start justify-start w-full mt-24 md:mt-56">
                <div class="flex items-center justify-start">
                    <button class="py-2 px-4 text-title">یک طرفه</button>
                    <span class="border-r-2 border-black">&nbsp</span>
                    <button class="py-2 px-4 text-title">رفت و برگشت</button>
                </div>
                <div class="border rounded-5 w-full mt-16 h-[60px]">
                    <!-- TODO: Add form-->
                </div>
                <button class="self-end py-2 px-32 rounded bg-primary-light hover:bg-primary-dark text-black mt-16">جستجو بلیط هواپیما</button>
            </section>
            <section class="py-40">
                <h1 class="text-title text-[32px]">با ما ایمن سفر کنید</h1>
                <h2 class="text-title text-[15px] mt-16">به‌عنوان یکی از بزرگ‌ترین و با تجربه‌ترین خط هوایی بین‌المللی در بحران کووید-۱۹، شما می‌توانید با اعتماد به ما ایمن سفر کنید.</h2>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-24">
                    <div class="rounded-20 w-full max-w-[270px] overflow-hidden group">
                        <img class="object-cover rounded-t-20 w-[270px] h-[150px] group-hover:scale-105 transition-all duration-500" src="static/img/box-1.jpg" alt="Box 1">
                        <div class="bg-white dark:bg-[#14151a] rounded-b-20 py-8 px-16">
                            <span class="text-title text-[12px] md:text-[14px]">اقدامات ایمنی</span>
                        </div>
                    </div>
                    <div class="rounded-20 w-full max-w-[270px] overflow-hidden group">
                        <img class="object-cover rounded-t-20 w-[270px] h-[150px] group-hover:scale-105 transition-all duration-500" src="static/img/box-2.jpg" alt="Box 2">
                        <div class="bg-white dark:bg-[#14151a] rounded-b-20 py-8 px-16">
                            <span class="text-title text-[12px] md:text-[14px]">سفر خود را برنامه ریزی کنید</span>
                        </div>
                    </div>
                    <div class="rounded-20 w-full max-w-[270px] overflow-hidden group">
                        <img class="object-cover rounded-t-20 w-[270px] h-[150px] group-hover:scale-105 transition-all duration-500" src="static/img/box-3.jpg" alt="Box 3">
                        <div class="bg-white dark:bg-[#14151a] rounded-b-20 py-8 px-16">
                            <span class="text-title text-[12px] md:text-[14px]">تضمین تغییر بلیط</span>
                        </div>
                    </div>
                    <div class="rounded-20 w-full max-w-[270px] overflow-hidden group">
                        <img class="object-cover rounded-t-20 w-[270px] h-[150px] group-hover:scale-105 transition-all duration-500" src="static/img/box-4.jpg" alt="Box 4">
                        <div class="bg-white dark:bg-[#14151a] rounded-b-20 py-8 px-16">
                            <span class="text-title text-[12px] md:text-[14px]">ملزومات ورود و سفر</span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-40">
                <h1 class="text-title text-[32px]">نرخ‌های شگفت‌انگیز</h1>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-24">
                    <div class="rounded-20 w-full max-w-[270px] overflow-hidden group">
                        <img class="object-cover rounded-t-20 w-[270px] h-[150px] group-hover:scale-105 transition-all duration-500" src="static/img/box-5.jpg" alt="Box 5">
                        <div class="bg-white dark:bg-[#14151a] rounded-b-20 py-8 px-16">
                            <div class="flex flex-col items-start justify-start">
                                <span class="text-title text-[14px] font-bold">مونترآل</span>
                                <span class="text-title text-[14px] mt-8">20 دی - 29 دی</span>
                            </div>
                            <div class="flex flex-col items-start justify-start mt-24">
                                <span class="text-title text-[14px]">اکونومی از</span>
                                <span class="text-title text-[16px] font-bold mt-8">38,000,000 تومان</span>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-20 w-full max-w-[270px] overflow-hidden group">
                        <img class="object-cover rounded-t-20 w-[270px] h-[150px] group-hover:scale-105 transition-all duration-500" src="static/img/box-6.jpg" alt="Box 5">
                        <div class="bg-white dark:bg-[#14151a] rounded-b-20 py-8 px-16">
                            <div class="flex flex-col items-start justify-start">
                                <span class="text-title text-[14px] font-bold">آمستردام</span>
                                <span class="text-title text-[14px] mt-8">20 دی - 29 دی</span>
                            </div>
                            <div class="flex flex-col items-start justify-start mt-24">
                                <span class="text-title text-[14px]">اکونومی از</span>
                                <span class="text-title text-[16px] font-bold mt-8">38,000,000 تومان</span>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-20 w-full max-w-[270px] overflow-hidden group">
                        <img class="object-cover rounded-t-20 w-[270px] h-[150px] group-hover:scale-105 transition-all duration-500" src="static/img/box-7.jpg" alt="Box 5">
                        <div class="bg-white dark:bg-[#14151a] rounded-b-20 py-8 px-16">
                            <div class="flex flex-col items-start justify-start">
                                <span class="text-title text-[14px] font-bold">پاریس</span>
                                <span class="text-title text-[14px] mt-8">20 دی - 29 دی</span>
                            </div>
                            <div class="flex flex-col items-start justify-start mt-24">
                                <span class="text-title text-[14px]">اکونومی از</span>
                                <span class="text-title text-[16px] font-bold mt-8">38,000,000 تومان</span>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-20 w-full max-w-[270px] overflow-hidden group">
                        <img class="object-cover rounded-t-20 w-[270px] h-[150px] group-hover:scale-105 transition-all duration-500" src="static/img/box-8.jpg" alt="Box 5">
                        <div class="bg-white dark:bg-[#14151a] rounded-b-20 py-8 px-16">
                            <div class="flex flex-col items-start justify-start">
                                <span class="text-title text-[14px] font-bold">واشینگتن</span>
                                <span class="text-title text-[14px] mt-8">20 دی - 29 دی</span>
                            </div>
                            <div class="flex flex-col items-start justify-start mt-24">
                                <span class="text-title text-[14px]">اکونومی از</span>
                                <span class="text-title text-[16px] font-bold mt-8">38,000,000 تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        `;
    }
}